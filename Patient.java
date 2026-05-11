import java.util.* ;
public class Patient {
    static String name;
    static String dob;
    static int mobile_no;
    static double weight;
    static String address;
    static int iD;

//creating a method to get patient details

public void patienD(){

//Assign patient details to Patient details Array
Scanner input1 = new Scanner (System.in);
System.out.print("Enter Patient Name:");  
name = input1.nextLine();

Scanner input2 = new Scanner (System.in);
System.out.print("Enter Patient Date of Birth:");  
dob = input2.nextLine();

Scanner input3 = new Scanner (System.in);
System.out.print("Enter Patient Mobile Number:");  
mobile_no = input3.nextInt();

Scanner input4 = new Scanner (System.in);
System.out.print("Enter Patient weight from KG:");  
weight = input4.nextInt();

Scanner input5 = new Scanner (System.in);
System.out.print("Enter Patient Address:");  
address = input5.nextLine();

Scanner input6 = new Scanner (System.in);
System.out.print("Enter Patient ID:");  
iD = input6.nextInt();
}
}