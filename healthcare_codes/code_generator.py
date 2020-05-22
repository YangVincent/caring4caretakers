import random
import string
import csv

def randomString(stringLength=4):
    letters = string.ascii_uppercase
    return ''.join(random.choice(letters) for i in range(stringLength))

# ABCD-EFGH-IJKL-MNOP
def createHealthcareCode():
    return '-'.join([randomString() for i in range(0, 4)])

def createAllCodes():
    return [createHealthcareCode() for i in range(0, 1000)]

def writeToCSV():
    with open('healthcare_codes.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=' ')
        for code in createAllCodes():
            writer.writerow([code])

print("Generating codes...")
writeToCSV()
print("Created codes in healthcare_codes.csv")
