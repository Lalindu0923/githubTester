
import json
import os

FILE_NAME = "students.json"




# Save students to file
def save_students(students):
    with open(FILE_NAME, "w") as file:
        json.dump(students, file, indent=4)


# Register a new student
def register_student():
    students = load_students()

    print("\n=== Student Registration ===")

    username = input("Enter username: ")

    if username in students:
        print("Username already exists!")
        return

    password = input("Enter password: ")
    full_name = input("Enter full name: ")
    student_id = input("Enter student ID: ")
    course = input("Enter course name: ")

    students[username] = {
        "password": password,
        "full_name": full_name,
        "student_id": student_id,
        "course": course
    }

    save_students(students)

    print("Student registered successfully!")





