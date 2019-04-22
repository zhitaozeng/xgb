package com.xgb;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan
@MapperScan(basePackages = {"com.xgb.mapper"})
public class XgbApplication {

	public static void main(String[] args) {
		SpringApplication.run(XgbApplication.class, args);
	}

}
