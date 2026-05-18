
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


# Load students
def load_students():
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME, "r") as file:
            return json.load(file)
    return {}


# Login function
def login_student():
    students = load_students()

    print("=== Student Login ===")

    username = input("Enter username: ")
    password = input("Enter password: ")

    if username in students and students[username]["password"] == password:
        print("\nLogin Successful!")
        print("Welcome,", students[username]["full_name"])
        print("Student ID:", students[username]["student_id"])
        print("Course:", students[username]["course"])
    else:
        print("Invalid username or password!")


login_student()





