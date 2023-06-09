import { useState } from "react";
import config from "./config";
import RecipeCard from "./components/RecipeCard";
import NutritionChart from "./components/NutritionChart";
import SearchForm from "./components/SearchForm";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Nutrition, Recipe, RecipeDetail } from "./types";

import { AppBar, Box, Paper, Toolbar, Typography } from "@mui/material";
import { Axios } from "axios";
import RecipeDetailModal from "./components/RecipeDetailModal";
import ErrorAlert from "./components/ErrorAlert";

const webClient = new Axios({
  baseURL: config.backendUrl,
  auth: { username: config.authUsername, password: config.authPassword },
  responseType: "json",
  timeout: 5000,
});

function App() {
  const [foodInfoData, setFoodInfoData] = useState<
    { nutrition: Nutrition; recipes: Array<Recipe> } | null | undefined
  >(null);
  const [recipeData, setRecipeData] = useState<Recipe | null>(null);
  const [recipeDetailData, setRecipeDetailData] =
    useState<Array<RecipeDetail> | null>(null);
  const [recipeDataLoading, setRecipeDataLoading] = useState(false);

  const [recipeDetailModalOpen, setRecipeDetailModalOpen] = useState(false);
  const [recipeDetailModalLoading, setRecipeDetailModalLoading] =
    useState(false);

  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

  const handleFoodInfoSearch = async (ingredient: string) => {
    try {
      setRecipeDataLoading(true);
      const response = await webClient.get("/food/info", {
        params: { query: ingredient },
      });
      setFoodInfoData(JSON.parse(response.data));
    } catch (error) {
      console.error(error);
      setErrorAlertOpen(true);
    } finally {
      setRecipeDataLoading(false);
    }
  };

  const handleRecipeSearch = async (id: number, recipe: Recipe) => {
    try {
      setRecipeDetailModalLoading(true);
      setRecipeData(recipe);
      setRecipeDetailModalOpen(true);
      const response = await webClient.get(`/food/recipe/${id}`);
      setRecipeDetailData(JSON.parse(response.data));
      console.log(JSON.parse(response.data));
    } catch (error) {
      console.error(error);
      setErrorAlertOpen(true);
    } finally {
      setRecipeDetailModalLoading(false);
    }
  };

  const handleRecipeDetailModalClose = () => {
    setRecipeDetailModalOpen(false);
    setRecipeData(null);
    setRecipeDetailData(null);
  };

  const handleErrorAlertClose = () => {
    setErrorAlertOpen(false);
  };

  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <AppBar sx={{ backgroundColor: "white", color: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img src="/icon.jpeg" alt="Food App" className="img" />
                </Box>
                <Typography variant="h5" marginLeft={2}>
                  Food App
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
          <SearchForm
            onSearch={handleFoodInfoSearch}
            loading={recipeDataLoading}
          />
          <NutritionChart
            nutrition={foodInfoData?.nutrition}
            loading={recipeDataLoading}
          />
          {foodInfoData === undefined || foodInfoData === null ? (
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Box>
                  <Paper sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 200,
                      }}
                    >
                      <Typography>We will show 10 recipes related to the ingredient you search</Typography>
                    </Box>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          ) : (
            foodInfoData?.recipes.map((recipe: Recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onMoreButtonClick={handleRecipeSearch}
                />
              );
            })
          )}
        </Grid>
      </Container>
      <RecipeDetailModal
        open={recipeDetailModalOpen}
        onClose={handleRecipeDetailModalClose}
        recipe={recipeData}
        recipeDetails={recipeDetailData}
        loading={recipeDetailModalLoading}
      />
      <ErrorAlert open={errorAlertOpen} onClose={handleErrorAlertClose} />
    </div>
  );
}

export default App;
