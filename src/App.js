import { Container } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid>
          <div>Header</div>
        </Grid>
        <Grid>
          <div>Header</div>
        </Grid>
        <Grid>
          <div>Header</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
