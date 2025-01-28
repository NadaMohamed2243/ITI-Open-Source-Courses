/*Develop an application that extracts the minimum and maximum of the elements of an array of
 1000 element and compute the search running time.
 ➢ Develop an application to implement the binary search algorithm and compute the search running
 time.
 ➢ Hint: Use System.currentTimeMillis() or System.nanoTime ()*/

import java.util.Random;
import java.util.Arrays;

class ArrayProcessing {
	int findMin(int [] arr)
	{
		long start = System.nanoTime();
		int min = arr[0];
		for(int i = 1 ; i< arr.length ; i++)
		{
			if(min > arr[i])
			{
				min = arr[i];
			}
		}
		long end = System.nanoTime();
		long duration = end - start;
		System.out.println("the duration of this process = "+duration);
		return min;
	}
	int findMax(int [] arr)
	{
		long start = System.nanoTime();
		
		int max = arr[0];
		for(int i = 1 ; i< arr.length ; i++)
		{
			if(max < arr[i])
			{
				max = arr[i];
			}
		}
		long end = System.nanoTime();
		long duration = end - start;
		System.out.println("the duration of this process = "+duration);

		return max;
	}

	int binarySearch(int [] arr,int key)
	{
		long start = System.nanoTime();
		
		int low = 0;
                int high = arr.length - 1;
		int mid;

		while(low <= high){
        		mid = (low+high)/2;
			if(key == arr[mid]){
				long end = System.nanoTime();
				long duration = end - start;
				System.out.println("the duration of this process = "+duration);
            			return mid;
        		}
       			else if(key > arr[mid]){
            			low = mid+1;
        		}
        		else{
           			high = mid-1;
        		}
    		}
     		return -1;
	}


}

public class LectureDemo3 {
	public static void main(String[] args) {
		System.out.println("Nada");
		
		Random rand = new Random();
		int[] array = new int[1000];
		for(int i=0 ; i<1000;i++)
		{	
			array[i]= rand.nextInt(100);	
		}
		
		ArrayProcessing arr = new ArrayProcessing();
		int maxValue = arr.findMax(array);
		System.out.println("The Max value of the array = "+ maxValue);

		int minValue = arr.findMin(array);
		System.out.println("The Min value of the array = "+ minValue);


		Arrays.sort(array);
		int key = 6;
		int result = arr.binarySearch(array, key);

        	if (result != -1)
            		System.out.println("our key " + key +" found at index: " + result);
        	else
            		System.out.println("key not found in the array");

        }
}
