package com.xgb.Service;

import com.xgb.model.Building;
import com.xgb.model.Dorm;
import com.xgb.model.MoBuilding;
import com.xgb.utils.PageBean;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BuildingService {
    void importDrom(String name, String note, String originalFilename, MultipartFile file) throws IOException;

    PageBean<MoBuilding> findAllBuilding(Integer page);


    Building findById(Integer bid);

    List<Building> findAll();

    void deleteById(Integer id);
}
