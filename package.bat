@echo off
del fire_fighting*.zip
7z a fire_fighting.zip @files.txt -x@files_e.txt

goto end 

copy fire_fighting.zip fire_fighting.zd.zip
copy serv\data\data1.db.zd serv\data\data1.db
7z a fire_fighting.zd.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.zdjg.zip
copy serv\data\data1.db.zdjg serv\data\data1.db
7z a fire_fighting.zdjg.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.jn.zip
copy serv\data\data1.db.jn serv\data\data1.db
7z a fire_fighting.jn.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.qd.zip
copy serv\data\data1.db.qd serv\data\data1.db
7z a fire_fighting.qd.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.zb.zip
copy serv\data\data1.db.zb serv\data\data1.db
7z a fire_fighting.zb.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.zz.zip
copy serv\data\data1.db.zz serv\data\data1.db
7z a fire_fighting.zz.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.dy.zip
copy serv\data\data1.db.dy serv\data\data1.db
7z a fire_fighting.dy.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.yt.zip
copy serv\data\data1.db.yt serv\data\data1.db
7z a fire_fighting.yt.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.wf.zip
copy serv\data\data1.db.wf serv\data\data1.db
7z a fire_fighting.wf.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.jin.zip
copy serv\data\data1.db.jin serv\data\data1.db
7z a fire_fighting.jin.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.ta.zip
copy serv\data\data1.db.ta serv\data\data1.db
7z a fire_fighting.ta.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.wh.zip
copy serv\data\data1.db.wh serv\data\data1.db
7z a fire_fighting.wh.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.rz.zip
copy serv\data\data1.db.rz serv\data\data1.db
7z a fire_fighting.rz.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.lw.zip
copy serv\data\data1.db.lw serv\data\data1.db
7z a fire_fighting.lw.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.ly.zip
copy serv\data\data1.db.ly serv\data\data1.db
7z a fire_fighting.ly.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.dz.zip
copy serv\data\data1.db.dz serv\data\data1.db
7z a fire_fighting.dz.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.lc.zip
copy serv\data\data1.db.lc serv\data\data1.db
7z a fire_fighting.lc.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.bz.zip
copy serv\data\data1.db.bz serv\data\data1.db
7z a fire_fighting.bz.zip serv\data\data1.db

copy fire_fighting.zip fire_fighting.hz.zip
copy serv\data\data1.db.hz serv\data\data1.db
7z a fire_fighting.hz.zip serv\data\data1.db

:end

pause