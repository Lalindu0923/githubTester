import java.util.*;
public class PatientHistory extends Patient{
    static int testID;

    public void history(Patient patientobj){
    
    boolean flag = true;
    while (flag){

    Scanner input11 = new Scanner (System.in);
    System.out.print("What is the Patient ID:");
    testID = input11.nextInt();

    if(patientobj.iD==testID){

        System.out.println("");
        System.out.println("Patient History");
        System.out.println("----------------");
        System.out.println("");
        System.out.println("Name:"+" "+name);
        System.out.println("Date Of Birth:"+" "+dob);
        System.out.println("Mobile No:"+" "+mobile_no);
        System.out.println("Weight:"+" "+weight+"KG");
        System.out.println("Address:"+" "+address); 
        flag=false;
    }

    else{
        System.out.println("");
        System.out.println("Wrong ID Not on the Database Please Try Again");
        System.out.println("");
        System.out.println("If you need to exit this menu Enter 0");
        System.out.println("");
        
        
    }
    

} 
} 
}  
