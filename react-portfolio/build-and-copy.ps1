# Build and Deploy Script for Local Setup
Write-Host "Building React Portfolio..." -ForegroundColor Cyan

# Step 1: Run Vite Build
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Build successful! Moving files to root directory..." -ForegroundColor Green

# Step 2: Copy dist contents to the parent folder (root of the repo)
$source = ".\dist\*"
$destination = "..\"

# Copy all files and folders from dist to the root, overwriting existing ones
Copy-Item -Path $source -Destination $destination -Recurse -Force

Write-Host "Files copied successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "Your portfolio is now ready to be pushed to GitHub!" -ForegroundColor White
Write-Host "Just commit the changes in the root folder and push." -ForegroundColor White
Write-Host "=======================================================" -ForegroundColor Cyan
