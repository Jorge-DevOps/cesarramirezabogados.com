import { Button, Box, Typography, TextField, Divider, } from "@mui/material"
import FormErrorMessage from "./main/FormErrorMessage"
import { SchemaForm, InitialValue } from "./main/schema/SchemaForm"
import { Formik, Form } from "formik"
import TextareaAutosize from '@mui/base/TextareaAutosize';

// // import "./style.sass"

type Props = {
	onSubmit: (values: any) => void
}

export const FormContact = ({ onSubmit }: Props) => {

	return (
		<Box >

			<Formik
				enableReinitialize={false}
				initialValues={InitialValue}
				validationSchema={SchemaForm}
				onSubmit={(values) => { onSubmit(values) }}
			>
				{({ values, errors, handleChange, handleSubmit, handleBlur, touched }) => (
					<Form
						onSubmit={(e) => {
							e.preventDefault()
							handleSubmit(e)
						}}
					>
						<>
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "0 0 5px" }}
							>
								Nombre completo
							</Typography>
							<TextField
								fullWidth
								name="name"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.name}
								size="small"
								helperText=""
								sx={{ borderRadius: "8px" }}
							/>
							<FormErrorMessage nameField={"name"} error={errors} touched={touched} />
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Correo electrónico
							</Typography>
							<TextField
								fullWidth
								name="email"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								placeholder={"correo@gmail.com"}
								onChange={handleChange}
								value={values.email}
								size="small"
								helperText=""
								sx={{ borderRadius: "8px" }}

							/>
							<FormErrorMessage nameField={"email"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Número telefónico
							</Typography>
							<TextField
								fullWidth
								name="phone"
								type="text"
								autoComplete="off"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.phone}
								size="small"
								style={{ borderRadius: "16px" }}
							/>
							<FormErrorMessage nameField={"phone"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Asunto
							</Typography>

							<TextareaAutosize
								aria-label="maximum height"
								style={{ width: " 100%", resize: "none", padding: "10px", height: "100px" }}
							/>

							<Box
								component="div"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								<Button
									type="submit"
									variant="contained"
									sx={{
										mt: 3,
										mb: 2,
										backgroundImage: "-webkit-linear-gradient(#282E3F, #282E3F 60%, #282E3F)",
										padding: "8px 12px",
										textTransform: "none",
										background: "#7189FF",
										border: "2px solid #2,2E3F",
										borderRadius: "8px",
										color: "#fff",
										textDecoration: "none",
										fontSize: " .9rem",
										display: "flex",
										alignItems: "center",
										height: "auto",
										justifyContent: "center",
										width: "100%",
										transition: "background-color 0.3s", // Agregamos una transición para el color de fondo
										"&:hover": {
											background: "#5064D3", // Cambia el color de fondo en hover
										},
									}}
								>
									Enviar
								</Button>


							</Box>
						</>
					</Form>
				)}
			</Formik>
		</Box >

	)
}



