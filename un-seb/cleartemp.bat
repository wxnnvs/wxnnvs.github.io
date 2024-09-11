@echo off
set "tempPath=%localappdata%\SafeExamBrowser\Temp"

if exist "%tempPath%" (
    rmdir /s /q "%tempPath%"
    echo %tempPath% deleted successfully.
) else (
    echo %tempPath% has already been deleted.
)

pause