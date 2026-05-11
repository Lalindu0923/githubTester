import java.util.* ;
public class MainApp{
    public static void main(String[]args){

        

//Creating interface of the Menu
boolean flag = true;
while (flag){
        System.out.println("");
        System.out.println("XYZ Hospital");
        System.out.println("=============");
        System.out.println("1. Admit a patient");
        System.out.println("2. Allocate a doctor");
        System.out.println("3. Allocate a bed");
        System.out.println("4. View patient history");
        System.out.println("5. Add prescription");
        System.out.println("6. Discharge");
        System.out.println("7. Generate The bill");
        System.out.println("0. Exit");
        System.out.println("");

//User input in the Menu

        Scanner input1 = new Scanner (System.in);
        System.out.print("Please Enter your choice:");  
        int menuNo = input1.nextInt();
        System.out.println("");

//Creating objects for the classes

        Patient patientobj = new Patient();
        DoctorAllocate doctor = new DoctorAllocate();
        Prescription note = new Prescription();
        PatientHistory ph = new PatientHistory();
        Bed bedassign = new Bed();
        Discharge dischargeobj = new Discharge();
        Bill billobj = new Bill();

//Retrive Information as User Input

         switch(menuNo){

            case 1:
             patientobj.patienD();
             break;
            
            
            case 2:
              doctor.doctorAllocating(patientobj);
              break;

            case 3:
               bedassign.bedNo(patientobj);
                 break;

            case 4:
               ph.history(patientobj);
            
                 break;

            case 5:
               note.prescriptionwriting(patientobj);
                 break;

            case 6:
               dischargeobj.discharge(bedassign);
                 break;

            case 7:
               billobj.payment(bedassign);
            
                 break;

            case 0:
             flag = false;    
                 break;

             default : 
             System.out.println("Invalid Input Please Try Again!!");
         }
    }


    }
}
