import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { Recipe } from "../types";
import { ThumbUp } from "@mui/icons-material";

export interface RecipeCardProps {
  recipe?: Recipe | null;
  onMoreButtonClick: (id: number, recipe: Recipe) => void
}

const RecipeCard: React.FunctionComponent<RecipeCardProps> = ({
  recipe,
  onMoreButtonClick
}: RecipeCardProps) => {
  return (
    <Grid item sm={4} xs={6}>
      <Paper elevation={3}>
        {recipe === undefined || recipe == null ? (
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
        ) : (
          <Box>
            <Box
              sx={{
                margin: 0,
                padding: 0,
                height: 200,
                overflow: "hidden",
              }}
            >
              <img src={recipe.image} alt="" className="img" />
            </Box>
            <Box paddingX={1} paddingBottom={1}>
              <Tooltip title={recipe.title} placement="bottom-start">
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{
                    textAlign: "left",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                  paddingTop={1}
                >
                  {recipe.title}
                </Typography>
              </Tooltip>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThumbUp sx={{ width: 12.5, color: "orange" }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {recipe.likes}
                </Typography>
              </Box>
              {/* <Box
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                  // alignItems: "flex-start",
                  // height: 100,
                  textAlign: "left",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  // whiteSpace: "normal",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  component="p"
                  marginLeft={0.5}
                  align="left"
                >
                  Here is some desc Here is some descHere is some descHere is
                  some descHere is some descHere is some descHere is some
                  descHere is some descHere is some descHere is some descHere is
                  some descHere is some descHere is some descHere is some desc
                </Typography>
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button onClick={() => onMoreButtonClick(recipe.id, recipe)}>More</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default RecipeCard;
