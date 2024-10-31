import { Avatar, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface ListingItemProp {
	userId: number;
  setChatId: (userId: number) => void;
}

/**
 * TO-DO:
 * - get username & previewText by userid & populate ListingItem
 */

const ListingItem: React.FC<ListingItemProp> = ({userId, setChatId}) => {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => setChatId(userId)}>
				<Avatar sx={{ marginRight: 2 }} />
				<ListItemText
					primary={"User2"}
					secondary={
						"Some preview text I dont actually know if this will truncate HAHAHAHAHHAH"
					}
					primaryTypographyProps={{ noWrap: true }}
					secondaryTypographyProps={{ noWrap: true }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default ListingItem;
