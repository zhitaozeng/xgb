package com.xgb.Service.ServiceImpl;

import com.xgb.Service.DormService;
import com.xgb.mapper.BuildingMapper;
import com.xgb.mapper.DormMapper;
import com.xgb.mapper.StudentMapper;
import com.xgb.model.Building;
import com.xgb.model.Dorm;
import com.xgb.model.Student;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DormServiceImpl implements DormService {

    @Resource
    private DormMapper dormMapper;
    @Resource
    private StudentMapper studentMapper;
    @Resource
    private BuildingMapper buildingMapper;


    //通过id查询床位
    @Override
    public Dorm findById(Integer dormid) {
        return dormMapper.selectByPrimaryKey(dormid);
    }


    //通过bid查找房间信息
    @Override
    public List<Dorm> findByBid(Integer bid) {
        Dorm dorm = new Dorm();
        dorm.setBuilding(bid);
        return dormMapper.select(dorm);
    }

    //通过id和学生数组添加学生到宿舍
    @Override
    public void addByIdStus(Integer id, Integer[] stus) {
        Dorm dorm = dormMapper.selectByPrimaryKey(id);
        dorm.setNum( dorm.getNum() + stus.length);
        dormMapper.updateByPrimaryKeySelective(dorm);
        for (int i=0;i<stus.length;i++){
            Student student = new Student();
            student.setId(stus[i]);
            student.setDormid(id);
            studentMapper.updateByPrimaryKeySelective(student);
        }
    }

    //更新楼栋
    @Override
    public void updateById(Integer id, String name, String note) {
        Building building = new Building();
        building.setId(id);
        building.setName(name);
        building.setNote(note);
        buildingMapper.updateByPrimaryKeySelective(building);
    }

    //清空宿舍人员
    @Override
    public void clearDorm(Integer id) {
        Student student = new Student();
        student.setDormid(id);
        List<Student> studentList = studentMapper.select(student);
        for (Student s:studentList) {
            s.setDormid(null);
            studentMapper.updateByPrimaryKey(s);
        }
        Dorm dorm = new Dorm();
        dorm.setId(id);
        dorm.setNum(0);
        dormMapper.updateByPrimaryKeySelective(dorm);
    }

    //更新床位
    @Override
    public void updateByDorm(Dorm dorm) {
        dormMapper.updateByPrimaryKeySelective(dorm);
    }

    //删除所有的房间
    @Override
    public void deleteByBid(Integer id) {
        Dorm dorm = new Dorm();
        dorm.setBuilding(id);
        dormMapper.delete(dorm);
    }
}
