
import { ApplicationResult } from "../core/function.js";
import { ApplicationResponse } from "../core/response.js";
import { userMiddleware } from "../middleware/userMiddleware.js";


export const register = async (req, res) => {
    userMiddleware.User.registerUser(req)
        .then((data) => {
            const response = ApplicationResult.forCreated();
            var statuscode = 0;
            ApplicationResponse.success(
                response,
                null,
                (response) => (statuscode = response.status)
            );
            res.json({ status: statuscode, data: data });
        })
        .catch((error) => {
            ApplicationResponse.error(error, null, (response) => {
                res.status(response.status).json(response);
            });
        });
        
};