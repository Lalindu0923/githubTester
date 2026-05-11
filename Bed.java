import java.util.* ;

public class Bed extends  Patient{
    static int bedNO;
    static int wardNO;
    static int pID;
    boolean flag = true;
    public void bedNo(Patient patientobj){
    

        Scanner input12 = new Scanner (System.in);
        System.out.print("What is the Patient ID:");
        pID = input12.nextInt();

            System.out.println("Select a Ward ");
            System.out.println("--------------");
            System.out.println("");
            System.out.println("1. Ward 1");
            System.out.println("2. Ward 2");
            System.out.println("3. Ward 3");
            System.out.println("");

            Scanner input13 = new Scanner (System.in);
            System.out.print("Enter The Ward NO:");
            wardNO = input13.nextInt();

                switch(wardNO){
                    case 1:
                    System.out.println("");
                    System.out.println("Available Beds");   
                    System.out.println("----------------");
                    System.out.println("12"+"  "+"10"+"  "+"20");
                    Scanner input14 = new Scanner (System.in);
                    System.out.print("Enter a bed NO:");
                    bedNO = input14.nextInt();
                    System.out.println("");
                    System.out.println("In"+" "+"Ward NO 1"+" "+"Bed NO"+" "+bedNO+" "+"has been assigned to Patient NO"+" "+pID);
                    break;
                     

                    case 2:
                    System.out.println("Available Beds");   
                    System.out.println("----------------");
                    System.out.println("2"+"  "+"3"+"  "+"19");
                    Scanner input15 = new Scanner (System.in);
                    System.out.print("Enter a bed NO:");
                    bedNO = input15.nextInt();
                    System.out.println("");
                    System.out.println("In"+" "+"Ward NO 2"+" "+"Bed NO"+" "+bedNO+" "+"has been assigned to Patient NO"+" "+pID);
                    break;
                      

                    case 3:
                    System.out.println("Available Beds");   
                    System.out.println("----------------");
                    System.out.println("5"+"  "+"8"+"  "+"11");
                    Scanner input16= new Scanner (System.in);
                    System.out.print("Enter a bed NO:");
                    bedNO = input16.nextInt();
                    System.out.println("");
                    System.out.println("In"+" "+"Ward NO 3"+" "+"Bed NO"+" "+bedNO+" "+"has been assigned to Patient NO"+" "+pID);
                    break; 
                }
                 
        } 
    }  

