import java.util.*;
public class Discharge extends Bed{

    int patientID;

    public void discharge(Bed bedassign){
        
        boolean flag = true;
        while (flag){

        Scanner input17 = new Scanner (System.in);
        System.out.print("Enter the Patient ID :");
        patientID = input17.nextInt();
        System.out.println("");

            System.out.println("Name:"+" "+name);
            System.out.println("ID:"+" "+patientID);
            System.out.println("Ward NO:"+" "+wardNO);
            System.out.println("Bed NO:"+" "+bedNO);
            System.out.println(" ");
            System.out.println("Patient has successfully discharged.");
            flag=false;
        }
}
}
