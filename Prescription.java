import java.util.* ;
public class Prescription extends Patient{
    String drug;
    String dose;

    public void prescriptionwriting(Patient patientobj){
//Generating interface for user inputs

    System.out.println("Prescription for"+" "+name+"_"+iD);
    System.out.println("==============================");
    System.out.println("");

//creating a loop to add drugs 

boolean flag = true;
while (flag){



    ArrayList<String> drugsList = new ArrayList<String>();
    
    for (int i = 0; flag ; i++){

//Take user Inputs for drugs
    Scanner input8 = new Scanner (System.in);
    System.out.print("Drug Name :");
    drug = input8.nextLine();
    drugsList.add(drug);
    Scanner input9 = new Scanner(System.in);
    System.out.print("Dosage in mg:");
    dose = input9.nextLine();
    i++;
    drugsList.add(dose);


    

    System.out.println("");
    System.out.println("Add another drug ?");
    System.out.println("-----------------");
    System.out.println("");
    System.out.println("1. Yes");
    System.out.println("0. No");
    System.out.println("");

//Take a user Input to add another drug

    Scanner input10 = new Scanner (System.in);
    System.out.print("Please Enter your choice:");  
    int Num = input10.nextInt();
    System.out.println("");

//Using a switch to consider the User input on adding another drug

    switch(Num){
        case 1:
        break;

        case 0:
        System.out.println(drugsList);
        flag = false;
        break;
    }
}
}
}
}