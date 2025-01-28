/*  Given a sentence and a word, your task is that to count the number of occurrences of the
 given word in the string and print the number of occurrence of the word.
 ➢ Perform the above task using only methods of the String class (2 ways) */

class WordProcessing {
	String sentence;
    	String word;

    	public WordProcessing(String _sentence, String _word) {
        	sentence = _sentence;
        	word = _word;
    	}

    	int WordCountUsingSplit() {
        	int countOccurrence = 0;
        	String[] parts = sentence.split("[\\s.,]+"); 
        
        	for (String part : parts) {
            	if (part.equals(word)) {
                	countOccurrence++;
            	}
        	}
        	return countOccurrence;
    	}

	int WordCountUsingIndexOf() {
        	int countOccurrence = 0;
      		int index = sentence.indexOf(word);
		
		while(index != -1)
		{
			countOccurrence++;
			index = sentence.indexOf(word , index+1);

		}	
		
        	return countOccurrence;
    	}


}

public class LectureDemo2 {
	public static void main(String[] args) {
        	if (args.length < 2) {
        		System.out.println("Please enter sentence and word.");
        	}
		else{
			String sentence = args[0];
        		String word = args[1];

        		WordProcessing process = new WordProcessing(sentence, word);
        		int numOfOccurrenceSplit = process.WordCountUsingSplit();
        		System.out.println("The number of occurrences of the word " + word + " in the sentence " + sentence + " is: " + numOfOccurrenceSplit);
			
			int numOfOccurrenceIndexOf = process.WordCountUsingIndexOf();
        		System.out.println("The number of occurrences of the word " + word + " in the sentence " + sentence + " is: " + numOfOccurrenceIndexOf);
    	}}
}
