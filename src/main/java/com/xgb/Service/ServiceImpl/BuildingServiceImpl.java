package com.xgb.Service.ServiceImpl;

import com.github.pagehelper.PageHelper;
import com.xgb.Service.BuildingService;
import com.xgb.mapper.BuildingMapper;
import com.xgb.mapper.DormMapper;
import com.xgb.model.Building;
import com.xgb.model.Dorm;
import com.xgb.model.MoBuilding;
import com.xgb.utils.PageBean;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class BuildingServiceImpl implements BuildingService {

    @Resource
    private BuildingMapper buildingMapper;
    @Resource
    private DormMapper dormMapper;

    //导入房间信息
    @Override
    public void importDrom(String name, String note, String originalFilename, MultipartFile file) throws IOException {

        //创建新楼栋
        Building building = new Building();
        building.setName(name);
        building.setNote(note);
        buildingMapper.insertSelective(building);
        Integer id = buildingMapper.selectOne(building).getId();

        //插入房间
        //判断版本
        boolean isExcel2003 = true;
        if (originalFilename.matches("^.+\\.(?i)(xlsx)$")) {
            isExcel2003 = false;
        }
        InputStream is = file.getInputStream();
        Workbook wb = null;
        if (isExcel2003) {
            wb = new HSSFWorkbook(is);
        } else {
            wb = new XSSFWorkbook(is);
        }

        //获取第一个sheet
        Sheet sheet = wb.getSheetAt(0);

        //遍历sheet获得所有的行,第一行不用遍历
        for (int i =0;i<=sheet.getLastRowNum();i++) {
            //获得该行
            Row row = sheet.getRow(i);
            if (row == null) {
                break;
            }
            //遍历该行,获得所有的单元格
            if (row.getCell(0) != null) {
                Dorm dorm = new Dorm();
                dorm.setBuilding(id);
                dorm.setName(row.getCell(0).getStringCellValue());
                dormMapper.insertSelective(dorm);
            }
        }
    }


    //查询所有房间的信息
    @Override
    public PageBean<MoBuilding> findAllBuilding(Integer page) {
        PageBean<MoBuilding> pageBean = new PageBean<>();
        //设置当前页码
        pageBean.setPage(page);
        //设置每页显示数
        Integer limit = 5;
        pageBean.setLimit(limit);


        //设置总记录数
        Integer totalCount = buildingMapper.selectCount(new Building());
        pageBean.setTotalCount(totalCount);
        //计算总页数
        Integer totalPage = (int) Math.ceil((double)totalCount / (double)limit);
        pageBean.setTotalPage(totalPage);
        //开启pagehelper
        PageHelper.startPage(page,limit);
        //查询每页显示的数据
        List<Building> buildings = buildingMapper.selectAll();
        List<MoBuilding> moBuildings = new ArrayList<>();
        for (Building building:buildings) {
            MoBuilding moBuilding= new MoBuilding();
           moBuilding.setId(building.getId());
           moBuilding.setName(building.getName());
           moBuilding.setNote(building.getNote());
           Dorm dorm = new Dorm();
           dorm.setBuilding(building.getId());
           moBuilding.setDormNum(dormMapper.selectCount(dorm));
           dorm.setNum(0);
           moBuilding.setEmptyNum(dormMapper.selectCount(dorm));
           moBuildings.add(moBuilding);
        }
        pageBean.setList(moBuildings);
        return pageBean;
    }

    //通过id查询楼栋信息
    @Override
    public Building findById(Integer bid) {
        return buildingMapper.selectByPrimaryKey(bid);
    }

    //显示所有的楼栋
    @Override
    public List<Building> findAll() {
        return buildingMapper.selectAll();
    }

    //删除楼栋信息
    @Override
    public void deleteById(Integer id) {
        buildingMapper.deleteByPrimaryKey(id);
    }
}
