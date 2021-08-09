import { Request, Response, Router } from 'express';
import CreateValidationController from '../../../modules/validator/useCases/createValidation/CreateValidationController';
import DeleteValidationController from '../../../modules/validator/useCases/deleteValidation/DeleteValidationController';
import GetSingleValidationController from '../../../modules/validator/useCases/getSingleValidation/GetSingleValidationController';
import GetValidationsController from '../../../modules/validator/useCases/getValidations/GetValidationsController';
import UpdateValidationController from '../../../modules/validator/useCases/updateValidation/UpdateValidationController';


const createValidationController = new CreateValidationController();
const getSingleValidationController = new GetSingleValidationController();
const getValidationsController = new GetValidationsController();
const deleteValidationController = new DeleteValidationController();
const updateValidationController = new UpdateValidationController();

const router = Router();

router.post("/check", createValidationController.handle);
router.get("/return/:cpf", getSingleValidationController.handle);
router.get("/return", getValidationsController.handle);
router.delete('/delete/:cpf', deleteValidationController.handle);
router.put('/update/:cpf', updateValidationController.handle);

export default router;