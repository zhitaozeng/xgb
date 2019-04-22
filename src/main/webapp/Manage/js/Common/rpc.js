/**
 * Created by tinyjian on 17/3/3.
 */
var manage_rpc = {
    //构造指定url路由
    buildMVC : function(controller, aciton) {
        var mvc = {
            app : 'Manage',
            ctr : controller,
            act : aciton
        };
        return '\\index.php?' + buildQueryString(mvc);
    },
    //验证码登陆
    loginWithValidate : function(username, password, code, callback) {
        var url = manage_rpc.buildMVC('IndexAjax', 'login');
        ajaxPost(
            url,
            {
                username : username,
                password : password,
                code : code,
            },
            callback
        );
    },
    //获取专业列表
    getMajorList : function(year, callback) {
        var url = manage_rpc.buildMVC('MajorAjax', 'getMajorList');
        ajaxGet(
            url,
            {year : year},
            callback
        );
    },
    //添加专业
    addMajor : function(major_id, data, callback) {
        var url = manage_rpc.buildMVC('MajorAjax', 'addMajor');
        data['major_id'] = major_id;
        ajaxPost(
            url,
            data,
            callback
        );
    },
    //删除专业
    delMajor : function (major_id, forceDel, callback) {
        var url = manage_rpc.buildMVC('MajorAjax', 'delMajor');
        ajaxGet(
            url,
            {major_id : major_id, force: forceDel},
            callback
        );
    },
    //修改专业
    modifyMajor : function (major_id, data, callback) {
        var url = manage_rpc.buildMVC('MajorAjax', 'modifyMajor');
        data['major_id'] = major_id;
        ajaxGet(
            url,
            data,
            callback
        );
    },
    //获取班主任列表
    getTeacherList : function(callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'getTeacherList');
        ajaxGet(
            url,
            {},
            callback
        );
    },
    //获取班级列表
    getClassList : function(params, callback) {
        var url = manage_rpc.buildMVC('ClassAjax', 'getClassList');
        ajaxGet(
            url,
            params,
            callback
        );
    },
    //添加班级
    addClass : function (data, callback) {
        var url = manage_rpc.buildMVC('ClassAjax', 'addClass');
        ajaxGet(
            url,
            data,
            callback
        );
    },
    //删除班级
    delClass : function (class_id, forceDel, callback) {
        var url = manage_rpc.buildMVC('ClassAjax', 'delClass');
        ajaxGet(
            url,
            {class_id : class_id, force: forceDel},
            callback
        );
    },
    //修改班级信息
    modifyClass : function (class_id, data, callback) {
        var url = manage_rpc.buildMVC('ClassAjax', 'modifyClass');
        data['class_id'] = class_id;
        ajaxGet(
            url,
            data,
            callback
        );
    },
    //获取学期列表
    getTermList : function(callback) {
        console.log(arguments);
        var url = manage_rpc.buildMVC('ClassAjax', 'getTermList');
        ajaxGet(
            url,
            {},
            callback
        );
    },
    //上传成绩
    importScore : function(class_id, term_id, excel_data, callback) {
        var url = manage_rpc.buildMVC('ScoreAjax', 'importScore');
        excel_data = JSON.stringify(excel_data);
        ajaxPost(
            url,
            {
                class_id : class_id,
                term_id : term_id,
                excel_data : excel_data,
            },
            callback
        );
    },
    /**
     * 为班级导入学生
     * @param formData
     * @param callback
     */
    importStudent : function(class_id, excel_data, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'importStudent');
        excel_data = JSON.stringify(excel_data);
        ajaxPost(
            url,
            {
                class_id : class_id,
                excel_data : excel_data
            },
            callback
        );

    },
    //导入房间信息
    importDorm : function(building_id, excel_data, callback) {
        var url = manage_rpc.buildMVC('DormAjax', 'importDorm');
        excel_data = JSON.stringify(excel_data);
        ajaxPost(
            url,
            {
                building_id : building_id,
                excel_data : excel_data,
            },
            callback
        );
    },
    /**
     * 解析excel表格得到表格内容
     * @param formData
     * @param callback
     */
    parseExcel : function (formData, callback) {
        var url = manage_rpc.buildMVC('UploadAjax', 'parseExcel');
        ajaxPost(
            url,
            formData,
            callback,
            true,
            {
                cache: false,
                contentType: false,
                processData: false
            }
        );
    },
    //获取学生成绩
    getStudentScore : function(stu_id, term_id, callback) {
        var url = manage_rpc.buildMVC('ScoreAjax', 'getStudentScore');
        ajaxGet(
            url,
            {
                stu_id:stu_id,
                term_id:term_id
            },
            callback
        );
    },
    //获取班级成绩
    getClassScore : function(class_id, term_id, callback) {
        var url = manage_rpc.buildMVC('ScoreAjax', 'getClassScore');
        ajaxGet(
            url,
            {
                class_id:class_id,
                term_id:term_id
            },
            callback
        );
    },
    /**
     * 获取学生列表
     * @param data 搜索条件
     * {
     *  stu_name 姓名
     *  stu_num 学号
     *  major_id 专业id(唯一
     *  class_num 班号(班级名称
     *  class_id 班级id(唯一
     *  teacher_id 班主任id(唯一
     *  year_start 入学年份起始范围,为0表示不限制
     *  year_end 入学年份结束范围,为0表示不限制
     *  length 页容量
     *  start 页起始位置
     * }
     * @param callback
     */
    getStudentList : function(data, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'getStudentList');
        ajaxGet(
            url,
            data,
            callback
        );
    },
    /**
     * 添加学生
     * @param object data内容如下
     * {
     *  cid : 4 ,
     *  num : "12345",
     *  stu_name : "小明",
     *  sex : 1,
     *  year : "2014-09"
     * }
     * @param callback
     */
    addStudent : function(data, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'addStudent');
        ajaxPost(
            url,
            data,
            callback
        );
    },
    //删除学生
    delStudent : function(stu_id, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'delStudent');
        ajaxPost(
            url,
            {
                stu_id : stu_id
            },
            callback
        );
    },
    //修改学生的某个属性
    modifyStudentAttr : function(stu_id, attr, value, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'modifyStudentAttr');
        ajaxPost(
            url,
            {
                stu_id : stu_id,
                name : attr,
                value : value
            },
            callback
        );
    },
    //修改学生
    modifyStudent : function(stu_id, data, callback) {
        var url = manage_rpc.buildMVC('StudentAjax', 'modifyStudent');
        if (!data) {
            data = {};
        }
        data['stu_id'] = stu_id;
        ajaxPost(
            url,
            data,
            callback
        );
    },
    /**
     * 获取用户列表
     * @param param {user_name:'姓名',user_account:'登录名', user_staffnumber:'工号'}
     * @param callback
     */
    getUserList : function(param, callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'getUserList');
        ajaxGet(
            url,
            param,
            callback
        );
    },
    /**
     * 添加用户
     * @param data {user_name:'姓名', user_sex:'性别', user_staffnumber:'工号'
     * user_phone:'手机号', user_account:'登录号', user_password:'密码', user_permission:'角色'}
     * @param callback
     */
    addUser : function(data, callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'addUser');
        ajaxPost(
            url,
            data,
            callback
        );
    },
    /**
     * 获取用户信息
     * @param uid 用户id
     * @param callback
     */
    getUserInfo : function(user_id, callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'getUserInfo');
        ajaxGet(
            url,
            {user_id : user_id},
            callback
        );
    },
    /**
     * 修改用户信息
     * @param uid 用户id
     * @param data 用户信息
     * @param callback
     */
    modifyUser : function(user_id, data, callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'modifyUser');
        if (!data) {
            data = {};
        }
        data['user_id'] = user_id;
        ajaxPost(
            url,
            data,
            callback
        );
    },
    /**
     * 修改用户密码
     * @param user_id 用户id
     * @param old_pwd 旧密码
     * @param new_pwd 新密码
     * @param callback
     */
    modifyPassword : function(user_id, old_pwd, new_pwd, callback) {
        var url = manage_rpc.buildMVC('UserAjax', 'modifyPassword');
        ajaxPost(
            url,
            {
                user_id : user_id,
                old_pwd : old_pwd,
                new_pwd : new_pwd
            },
            callback
        );
    },
    /**
     * 删除用户
     * @param user_id 用户id
     * @param callback
     */
    delUser : function(user_id, callback) {
    var url = manage_rpc.buildMVC('UserAjax', 'delUser');
    ajaxPost(
        url,
        {
            user_id : user_id,
        },
        callback
    );
    },
    
    /*****wins******************************************************/
      /**
    **增加楼栋
    *@param name 名称
    *@param note 备注
    *@param callback
    */
    addBuilding : function(bname,bnote, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'addBuilding');
        ajaxPost(
        url,
        {
            name : bname,
            note : bnote
        },
        callback
    );
    },

    /**
    **获取楼栋信息列表
    *@param callback
    */
    getBuildingList : function(callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getBuildingList');
        ajaxPost(
            url,
            {},
            callback
        );
    },

    /**
    *修改房间信息
    *id
    *dorm_num
    *area
    *bed_num
    *@param callback
    */
    editDorm : function(dorm_id,dorm_num,dorm_area,bed_num, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'editDorm');
        ajaxPost(
        url,
        {
            id          : dorm_id,
            dorm_num    : dorm_num,
            area        : dorm_area,
            bed_num     : bed_num
        },
        callback
    );
    },

    /**
    *删除房间
    *id
    *@param callback
    */
    delDorm : function(dorm_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'delDorm');
        ajaxPost(
        url,
        {
            id          : dorm_id,
        },
        callback
    );
    },

    /**
    *按姓名或学号搜索
    *string
    *@param callback
    */
    searchStudent : function(v_string, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'searchStudent');
        ajaxPost(
        url,
        {
            string          : v_string,
        },
        callback
    );
    },

    /**
    *加载专业
    *@param callback
    */
    getAllMajorList : function(callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getMajorList');
        ajaxPost(
        url,

        callback
    );
    },


    /**
    *加载班级下拉框
    *年份 year
    *专业 major.id
    *@param callback
    */
    getMajorClassList : function(v_year, major_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getClassList');
        ajaxGet(
            url,
            {
                year          : v_year,
                major         : major_id
            },
            callback
        );
    },

    /**
    *加载选中班级的学生
    *class.id
    *@param callback
    */
    getStudentListWithDorm : function(data, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getStudentList');
        ajaxPost(
        url,
        data,
        callback
    );
    },

    /**
    *根据楼栋下拉框加载表格数据
    *building.id
    *不显示满员房间 isDisplay == true 不显示满员，否则显示
    *@param callback
    */
    getBedInfo : function(v_building,v_isDisplay, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getBedInfo');
        ajaxGet(
        url,
        {
            building          : v_building,
            isDisplay          : v_isDisplay,
        },
        callback
    );
    },

    /**
    *清空或删除宿舍学生
    *dorm.id
    *student.id 字符串 或 单个值
    *@param callback
    */
    dropDorm : function(dorm_id,student_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'dropDorm');
        ajaxPost(
        url,
        {
            dorm          : dorm_id,
            student       : student_id,
        },
        callback
    );
    },

    /**
    *为学生分配房间
    *房间id
    *学生id(单个或字符串)
    *@param callback
    */
    allocateBed : function(dorm_id,student_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'allocateBed');
        ajaxPost(
        url,
        {
            dorm          : dorm_id,
            student       : student_id,
        },
        callback
    );
    },
    
    /**
    *修改楼栋
    *id
    *name
    *note
    *@param callback
    */
    editBuilding : function(b_id,b_name,b_note, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'editBuilding');
        ajaxPost(
        url,
        {
            id         : b_id,
            name       : b_name,
            note       : b_note,
        },
        callback
    );
    },

    /**
    *删除楼栋
    *id
    *@param callback
    */
    delBuildingById : function(b_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'delBuildingById');
        ajaxPost(
        url,
        {
            id         : b_id,
        },
        callback
    );
    },

     /**
    *获取房间信息
    *id
    *@param callback
    */
    getDormById : function(b_id, callback){
        var url = manage_rpc.buildMVC('DormAjax', 'getDormById');
        ajaxGet(
            url,
            {
                id         : b_id,
            },
            callback
        );
    },
    /**
     * 获取专业的统计结果
     * @param major_id
     * @param term_id
     * @param callback
     */
    getMajorStatistic : function(major_id, term_id, callback) {
        var url = manage_rpc.buildMVC('ScoreAjax', 'getMajorStatistic');
        ajaxGet(
            url,
            {
                major_id : major_id,
                term_id : term_id
            },
            callback
        );
    },
    /**
     * 获取班号列表
     * @param major_id
     * @param callback
     */
    getClassNumList : function(major_id, callback) {
        var url = manage_rpc.buildMVC('ClassAjax', 'getClassNumList');
        ajaxGet(
            url,
            {
                major_id : major_id
            },
            callback
        );
    }
};