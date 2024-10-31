import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = ({}) => {
	const formState = useForm();
	const { handleSubmit, setValue, resetField } = formState;
  const [message, setMessage] = useState("");

	return (
		<Box
			position="sticky"
			bottom={0}
			sx={{
				backgroundColor: "#FFFFFF",
				padding: 2,
				display: "flex",
				flexDirection: "row",
			}}
		>
			<FormProvider {...formState}>
				<TextField
					fullWidth
					id="standard-basic"
					placeholder="Type sth"
					variant="standard"
					onChange={({ target: { value } }) => {setValue("message", value); setMessage(value);}
					}
				/>
				<IconButton disabled={message === "" ? true : false} onClick={handleSubmit((data) => console.log(data))}>
					<SendIcon />
				</IconButton>
			</FormProvider>
		</Box>
	);
};

export default MessageInput;
