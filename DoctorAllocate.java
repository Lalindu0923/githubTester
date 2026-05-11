import java.util.* ;
public class DoctorAllocate extends Patient{
    String doctorType;
    
//Creating a menu to Allocate a doctor  

public void doctorAllocating(Patient patientobj){
    System.out.println("Available Doctors At the Moment");
    System.out.println("================================");
    System.out.println("");
    System.out.println("1. Dentist");
    System.out.println("2. Opd");
    System.out.println("3. Psychiatrist");
    System.out.println("");

//Taking input for assign a doctor
    Scanner input7 = new Scanner (System.in);
    System.out.print("Enter What kind of a doctor need to allocate:");
    doctorType = input7.nextLine();
    
//To verify if the docotr assigned correctly to the patient
 
    switch(doctorType){
        case ("1"):
            System.out.println("");
            System.out.println("A Dentist has assigned to " + name );
            break;

        case ("2"):
            System.out.println("");
            System.out.println("A OPD Doctor has assigned to " + name );
            break;

        case ("3"):
            System.out.println("");
            System.out.println("A Psychiatrist has assigned to " + name );
            break;
        
        
    }

}

}
