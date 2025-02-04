/*
 • Create a generic interface that could be used to represent
 complex numbers
 • Create some generic methods that represent basic arithmetic
 operation on complex
*/

public class DoubleComplex implements Complex<Double> {
	private Double real;
    	private Double imaginary;

    	public DoubleComplex(Double real, Double imaginary) {
        	this.real = real;
        	this.imaginary = imaginary;
    	}

	public Double getReal() {
       		return real;
    	}

    	public Double getImaginary() {
        	return imaginary;
    	}

    	public Complex<Double> add(Complex<Double> z) {
        	return new DoubleComplex(this.real + z.getReal(), this.imaginary + z.getImaginary());
    	}

    	public Complex<Double> subtract(Complex<Double> z) {
        	return new DoubleComplex(this.real - z.getReal(), this.imaginary - z.getImaginary());
    	}

    	public Complex<Double> product(Complex<Double> z) {
        	Double realPart = this.real * z.getReal() - this.imaginary * z.getImaginary();
        	Double imaginaryPart = this.real * z.getImaginary() + this.imaginary * z.getReal();
        	return new DoubleComplex(realPart, imaginaryPart);
    	}
    	public Complex<Double> div(Complex<Double> z) {
        	Double denominator = z.getReal() * z.getReal() + z.getImaginary() * z.getImaginary();
        	Double realPart = (this.real * z.getReal() + this.imaginary * z.getImaginary()) / denominator;
        	Double imaginaryPart = (this.imaginary * z.getReal() - this.real * z.getImaginary()) / denominator;
        	return new DoubleComplex(realPart, imaginaryPart);
    	}
	public String toString() {
        	return String.format("%.2f + %.2fi", real, imaginary);
    	}
}