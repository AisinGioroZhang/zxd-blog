create table geometries(
    name varchar,
    geom geometry);

insert into geometries values ('Point', 'POINT(0 0)');
insert into geometries values ('Point', 'POINT(100 5)');
insert into geometries values ('Linestring', 'LINESTRING(0 0, 1 1, 2 1, 2 2)');
insert into geometries values ('Polygon', 'POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))');
insert into geometries values ('PolygonWithHole', 'POLYGON((0 0, 10 0, 10 10, 0 10, 0 0),' ||
                                                  '(1 1, 1 2, 2 2, 2 1, 1 1))');
insert into geometries values ('Collection', 'GEOMETRYCOLLECTION(' ||
                                             'POINT(2 0),' ||
                                             'POLYGON((0 0, 1 0, 1 1, 0 1, 0 0)))'
                                             );

select st_astext(geom) from geometries;
select * from nyc_neighborhoods where name = 'West Village';
-- 社区面积
SELECT st_area(geom) FROM nyc_neighborhoods WHERE name = 'West Village';
-- 面积英亩
SELECT Sum(ST_Area(geom)) / 4047
  FROM nyc_neighborhoods
  WHERE boroname = 'Manhattan';
-- sum 求列和
select sum(st_area(geom))/4047
from nyc_census_blocks
where boroname = 'Manhattan';

-- count 求列有多少行
-- ST_GeometryN 返回集合的第一个Geometry，如果只有一个返回自身
SELECT Count(*)
  FROM nyc_census_blocks
  WHERE ST_NumInteriorRings(ST_GeometryN(geom,1)) > 0;

select st_astext(st_geometryn(geom,1))  GeometryN, st_astext(geom) from geometries;

SELECT  sum(ST_Length(geom)) / 1000
FROM nyc_streets;

SELECT ST_Length(geom)
FROM nyc_streets
WHERE name = 'Columbus Cir';

select st_asgeojson(geom)
from  nyc_neighborhoods
WHERE name = 'West Village';

SELECT ST_NumGeometries(geom)
FROM nyc_neighborhoods
WHERE name = 'West Village';

-- 分组求和，并顺序展示
SELECT type, Sum(ST_Length(geom)) AS length
FROM nyc_streets
GROUP BY type
ORDER BY length DESC;

select * from nyc_streets;

select (geom) from geometries;

select 'point (0 0)'::geometry;
select 'srid=4326; point(117 36)'::geometry;

select name, st_astext(geom) from nyc_subway_stations order by name desc limit 5;

select updategeometrysrid('geometries','geom', 4326);
select st_distance(
    'srid=4326; point(-118.4079 33.9434)'::geography,
    'srid=4326; point(2.5559 49.0083)'::geography);

create table nyc_subway_stations_geog as
    select
           geography(st_transform(geom,4326)) as geog,
           name,
           routes
from nyc_subway_stations;

select * from nyc_subway_stations_geog;

select count(name), boroname from nyc_neighborhoods where boroname= 'Brooklyn'
group by boroname;

