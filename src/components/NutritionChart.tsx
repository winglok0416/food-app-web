import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export interface Nutrition {
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
}

export interface NutritionChartProps {
  nutrition?: Nutrition | null;
  loading?: boolean;
}

const NutritionChart = ({ nutrition, loading }: NutritionChartProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const total =
    nutrition != null
      ? [
          nutrition.fat_total_g,
          nutrition.protein_g,
          nutrition.carbohydrates_total_g,
        ].reduce((accu, curr) => (accu += curr))
      : 0;

  return (
    <Grid item xs={12}>
      <Paper elevation={2}>
        <Box>
          {loading && (
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <Typography>Loading...</Typography>
              </Box>
            </Paper>
          )}
          {!loading && (nutrition === undefined || nutrition === null) && (
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <Typography>No data to display</Typography>
              </Box>
            </Paper>
          )}
          {!loading && nutrition !== undefined && nutrition !== null && (
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Typography variant="subtitle1" component="h2">
                  {`${nutrition.name} - % in Calories`}
                </Typography>
                <Box sx={{ maxHeight: 350 }}>
                  <Doughnut
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "bottom",
                        },
                        title: {
                          display: true,
                          text: "TEST",
                          position: "top",
                          align: "center",
                          color: "rgb(255, 99, 132)",
                          fullSize: true,
                        },
                      },
                    }}
                    data={{
                      datasets: [
                        {
                          label: `${nutrition.name} - % in Calories`,
                          data: [
                            nutrition.fat_total_g,
                            nutrition.protein_g,
                            nutrition.carbohydrates_total_g,
                          ].map((val) => (val / total) * 100),
                          backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)",
                          ],
                        },
                      ],
                      labels: ["fat (g)", "protein (g)", "carbohydrates (g)"],
                    }}
                  />
                </Box>
                <Typography variant="body2" component="h3">
                  {`Serving size: ${nutrition.serving_size_g}g`}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Box>
                  <Typography variant="h5" component="h4">
                    Nutrition Facts
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Serving size: ${nutrition.serving_size_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography variant="body1" component="p">
                    Amount Per Serving
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Calories ${nutrition.calories}`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Total Fat ${nutrition.fat_total_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Saturated Fat ${nutrition.fat_saturated_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Cholesterol ${nutrition.cholesterol_mg}mg`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Sodium ${nutrition.sodium_mg}mg`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Potassium ${nutrition.sodium_mg}mg`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Total Carbohydrates ${nutrition.carbohydrates_total_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Dietary Fiber ${nutrition.fiber_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Sugar ${nutrition.sugar_g}g`}</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                  >{`Protein ${nutrition.protein_g}g`}</Typography>
                </Box>
              </Box>
            </Paper>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};

export default NutritionChart;
