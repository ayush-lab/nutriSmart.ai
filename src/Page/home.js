import React from "react";
import styled from "styled-components";
import beautify from "js-beautify";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
`;
const resetOptions = {
  e4x: true,
  preserve_newlines: false,
  indent_level: 0,
  indent_size: 0,
};

const ans =
  '<table border="1">\n' +
  "<tr><th>Nutrient</th><th>Per 100g</th><th>Per Serve</th><th>%GDA* Per Serve</th></tr>\n" +
  "<tr><td>Energy (kJ)</td><td>2089</td><td>1462</td><td>14%</td></tr>\n" +
  "<tr><td>Protein (g)</td><td>8.7</td><td>6.1</td><td>11%</td></tr>\n" +
  "<tr><td>Carbohydrate (g)</td><td>59.9</td><td>41.9</td><td>16%</td></tr>\n" +
  "<tr><td>- Total Sugars (g)</td><td>5.5</td><td>3.9</td><td>1%</td></tr>\n" +
  "<tr><td>- Added Sugars (g)</td><td>1.8</td><td>1.3</td><td></td></tr>\n" +
  "<tr><td>Fiber (g)</td><td>2.0</td><td>1.4</td><td>6%</td></tr>\n" +
  "<tr><td>Total Fat (g)</td><td>30.5</td><td>21.4</td><td>24%</td></tr>\n" +
  "<tr><td>- Saturated Fat (g)</td><td>13.5</td><td>9.5</td><td>29%</td></tr>\n" +
  "<tr><td>- Trans Fat (g)</td><td>0</td><td>0</td><td></td></tr>\n" +
  "<tr><td>Sodium (mg)</td><td>1028.3</td><td>719.8</td><td>30%</td></tr>\n" +
  "<tr><td>Iron (mg)</td><td>6.90</td><td>4.83</td><td>17%</td></tr>\n" +
  "</table>\n" +
  "\n" +
  '<p>*Guideline Daily Amounts of an average adult (2000 kcal). "Pack contains 4 serves</p>\n' +
  "\n" +
  "<h2>Ingredients</h2>\n" +
  "<p>Instant Noodles with Seasoning*</p>\n" +
  "<ul>\n" +
  "<li>Noodles: Refined wheat flour (Maida), Palm oil, Iodised salt, Wheat gluten, Thickeners (508 & 412), Acidity regulators (501(i) & 500(ii)) and Humectant (451(i)).</li>\n" +
  '<li>Masala "Tastemaker®": Mixed spices (25.6%) (Onion powder, Coriander powder, Turmeric powder, Cumin powder, Garlic powder, Black pepper powder, Aniseed powder, Ginger powder, Fenugreek powder, Black pepper, Refined wheat flour (Maida), Green cardamom powder & Nutmeg powder), Refined wheat flour (Maida), Hydrolysed groundnut protein, Sugar, Palm oil, Iodised salt, Starch, Thickeners (508), Flavour enhancer (635), Toasted onion flakes, Acidity regulator (330), Mineral, Colour (150d) and Wheat gluten.</li>\n' +
  "<li>Contains Wheat and Nut.</li>\n" +
  "<li>May contains Milk, Mustard, Oats and Soy.</li>\n" +
  "</ul>\n" +
  "\n" +
  "</body>\n" +
  "</html>\n" +
  "```\n" +
  "\n" +
  "This HTML code will create a webpage with a table containing the nutritional values per 100g and per serving, along with the percentage of the Guideline Daily Amount (%GDA) per serving based on the information from the image. It also includes a list of ingredients found in the instant noodles with seasoning. Please note that because the images may not contain complete information, the HTML reflects only what was visible and interpretable from the images provided.";

// console.log(ans);
// console.log(beautify(ans));
const Home = () => {
  return (
    <div>
      <Wrapper>
        <Title>Nutrition Analysis and Recommendation</Title>
        <CodeBlock>{beautify(ans, resetOptions)}</CodeBlock>
      </Wrapper>
      {/* <p>{ans}</p> */}
    </div>
  );
};

export default Home;
