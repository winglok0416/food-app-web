import { Box, Modal, Typography } from "@mui/material";
import { Recipe } from "../types";

export interface Step {
  number: number;
  step: string;
}
export interface RecipeDetail {
  name: string;
  steps: Array<Step>;
}

export interface RecipeDetailModalProps {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  recipe: Recipe | null;
  recipeDetails: Array<RecipeDetail> | null;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80%",
  overflow: "scroll"
};

const RecipeDetailModal = ({
  open,
  onClose,
  loading,
  recipe,
  recipeDetails,
}: RecipeDetailModalProps) => {
  console.log(recipeDetails);
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loading ? (
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 200,
            }}
          >
            <Typography>Loading...</Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={style}>
          <Box
            sx={{
              margin: 0,
              padding: 0,
              height: 200,
              overflow: "hidden",
            }}
          >
            <img src={recipe?.image} alt="" className="img" />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {recipe?.title}
          </Typography>
          <Typography
            id="modal-modal-subtitle"
            variant="subtitle2"
            component="h3"
          >
            Steps
          </Typography>
          {recipeDetails?.map((recipeDetail) =>
            recipeDetail.steps.map((val, index) => (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {`${index}. ${val.step}`}
              </Typography>
            ))
          )}
        </Box>
      )}
    </Modal>
  );
};

export default RecipeDetailModal;
