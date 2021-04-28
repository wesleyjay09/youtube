@echo off
echo @start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login > %systemroot%\sh.bat
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startSearchbar.bat"
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startComments.bat"
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startRecommended.bat"
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startVideo.bat"
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startProxy.bat"
start "sh" "C:\Users\kolby\Documents\GitHub\searchbar\startDatabase.bat"
start "" http://localhost:5001
