package com.health.web.routine;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface RoutineMapper {
	public List<Routine> find0RoutineById(Routine routine);
	public List<Routine> find2RoutineById(Routine routine);
	public List<Routine> find3RoutineById(Routine routine);
	public List<Routine> find5RoutineById(Routine routine);
}
