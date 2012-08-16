@echo off
set TCC=%~dp0tcc
set SERV=%~dp0serv
set INC_OPT=-I%SERV%\include -I%SERV%\base -I%SERV%\include\apr2
set LIB_OPT=-L%SERV%\lib -lapr-2 -lmongoose -lfun_subr
set TCC_OPT=%INC_OPT% %LIB_OPT%

set path=%tcc%;%PATH%
