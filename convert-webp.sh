#!/bin/bash

# Directory where the PNG files are located
INPUT_DIR="public"

# Loop through all PNG files in the directory
for file in "$INPUT_DIR"/*.png; do
    # Get the filename without extension
    filename=$(basename "$file" .png)
    
    # Convert PNG to WebP
    cwebp "$file" -o "$INPUT_DIR/$filename.webp"
    
    # Check if the conversion was successful
    if [ $? -eq 0 ]; then
        echo "Successfully converted $file to $filename.webp"
    else
        echo "Failed to convert $file"
    fi
done