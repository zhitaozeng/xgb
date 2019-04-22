package com.xgb.shiro;

import org.apache.shiro.cache.MemoryConstrainedCacheManager;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedHashMap;

@Configuration
public class ShiroConfiguration {

    @Bean("shiroFilter")
    public ShiroFilterFactoryBean shiroFilter(@Qualifier("securityManager")SecurityManager securityManager){
        ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
        bean.setSecurityManager(securityManager);

        //用户没有认证时，跳转到认证请求页面
        bean.setLoginUrl("/login");
        //认证通过页面，如果不配置，默认跳转到登入前访问的页面
        bean.setSuccessUrl("/index");
        //没有指定权限时，跳转页面
        bean.setUnauthorizedUrl("/unauthorized");

        /*
        anon:匿名访问，没有参数
        authc：认证通过才能访问，没有参数
        logout：访问该地址，shiro会自动清除session的值,然后会自动访问/目录
        perms：验证权限，有参数
        unauthorized: 验证权限不通过，没有参数
        filterChainDefinitionMap为过滤器链，从上往下顺序执行，建议将/**放在最下面
         */
        LinkedHashMap<String,String> filterChainDefinitionMap = new LinkedHashMap<>();

        filterChainDefinitionMap.put("/","anon");
        filterChainDefinitionMap.put("/login","anon");
        filterChainDefinitionMap.put("/logout","logout");
        //对静态资源设置为匿名访问
        filterChainDefinitionMap.put("/Manage/**","anon");
        filterChainDefinitionMap.put("/Assets/**","anon");
        //拦截未登入用户
        filterChainDefinitionMap.put("/**","authc");
        bean.setFilterChainDefinitionMap(filterChainDefinitionMap);

        return bean;
    }

    @Bean("securityManager")
    public SecurityManager securityManager(@Qualifier("authRealm") AuthRealm authRealm){
        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
        manager.setRealm(authRealm);
        return manager;
    }


    @Bean("authRealm")
    public AuthRealm authRealm(@Qualifier("credentialMatcher") CredentialMatcher matcher){
        AuthRealm authRealm = new AuthRealm();
        //使用缓存
        authRealm.setCacheManager(new MemoryConstrainedCacheManager());
        authRealm.setCredentialsMatcher(matcher);
        return authRealm;
    }

    @Bean("credentialMatcher")
    public CredentialMatcher credentialMatcher(){
        return new CredentialMatcher();
    }

    //开启shiro注解支持
    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(@Qualifier("securityManager")SecurityManager securityManager){
        AuthorizationAttributeSourceAdvisor advisor = new AuthorizationAttributeSourceAdvisor();
        advisor.setSecurityManager(securityManager);
        return advisor;
    }

    //开启aop，对类代理
    @Bean
    public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator(){
        DefaultAdvisorAutoProxyCreator creator = new DefaultAdvisorAutoProxyCreator();
        creator.setProxyTargetClass(true);
        return creator;
    }
}
