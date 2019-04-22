package com.xgb.Service;

import com.xgb.model.Dorm;

import java.util.List;

public interface DormService {
    Dorm findById(Integer dormid);

    List<Dorm> findByBid(Integer bid);

    void addByIdStus(Integer id, Integer[] stus);

    void clearDorm(Integer id);

    void updateByDorm(Dorm dorm);

    void updateById(Integer id, String name, String note);

    void deleteByBid(Integer id);
}
