@echo off
set "PATH=C:\Users\Manish s\AppData\Local\Programs\Git\cmd;C:\Users\Manish s\AppData\Local\Programs\Git\mingw64\bin;%PATH%"

echo ========================================================
echo Pushing Nandi Caterers to GitHub (main branch)...
echo Repository: https://github.com/Manish-CodeByte/Nandi-Caterers.git
echo ========================================================

git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo [SUCCESS] Code pushed successfully to GitHub!
) else (
    echo.
    echo [NOTE] If prompted above, please sign in with your GitHub account.
)
pause
