// [MANDATORY]


package Exercise2_FactoryMethodPattern;

public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Word document...");
    }
}
