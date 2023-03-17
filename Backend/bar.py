import json
from pyzbar import pyzbar
import cv2

# Open the webcam to scan barcodes
cap = cv2.VideoCapture(0)

# Scan for barcodes
barcodes = pyzbar.decode(cap)

# Extract the data from the barcode
barcode_data = barcodes[0].data.decode('utf-8')

# Convert the barcode data to a JSON object
json_data = json.dumps(barcode_data)

# Write the JSON data to a file
with open('barcode_data.json', 'w') as outfile:
    json.dump(json_data, outfile)

# Release the webcam
cap.release()