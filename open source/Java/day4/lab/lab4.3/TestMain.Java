/*
• Create a base class named Shape that contains one abstract
 method draw().
 • Create two concrete classes (Rectangle and Circle) that extend
 Shape
 • Create a test class that defines a method that accepts a list
 that contains only
 child classes of shape
 • Test your method by creating two ArrayList of Rectangle and
 shapes and pass them to the generic method
*/



import java.util.ArrayList;

public class TestMain{
	
	public static void drawShapes(ArrayList<? extends Shape> shapes) {
		for (Shape shape : shapes) {
        		shape.draw();
    		}
	}
	
	public static void main(String[] args)
	{
		ArrayList<Rect> rects = new ArrayList<>();
		rects.add(new Rect());
        	rects.add(new Rect());

		ArrayList<Shape> shapes = new ArrayList<>();
        	shapes.add(new Rect());
        	shapes.add(new Circle());

		System.out.println("Drawing Rectangles:");
        	drawShapes(rects);

        	System.out.println("\nDrawing Shapes:");
        	drawShapes(shapes);
	}

}