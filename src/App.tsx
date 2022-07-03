import "./styles.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function App() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log(event.target.textContent);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} />}
          label="Secondary"
          name="せんかんだり"
          value="01"
        />
      </FormGroup>
    </>
  );
}
