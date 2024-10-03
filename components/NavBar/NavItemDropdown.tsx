import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export const NavItemDropdown = ({
	title,
	isOpen,
}: {
	title: string;
	isOpen?: () => void;
}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const MenuItemStyles = {
		fontSize: '16px',
		'&:hover': { backgroundColor: 'PurpleMid' },
	};
	const LinkStyles = { textDecoration: 'none' };

	return (
		<Box
			sx={{
				width: 'max-content',
			}}
		>
			<Button
				id="basic-button"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				aria-controls={open ? 'choose-grade-menu' : undefined}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
				sx={{
					textAlign: 'center',
					height: '36px',
					width: '100%',
					backgroundColor: `PrimaryPurple`,
					color: `White`,
					paddingX: 2,
					borderRadius: '24px',
					whiteSpace: 'nowrap',
					'&:hover': {
						backgroundColor: `PrimaryPurple`,
					},
					'&:active': {
						backgroundColor: `PrimaryPurple`,
					},
				}}
			>
				<Typography variant="button" color={`White`}>
					{title.toUpperCase()}
				</Typography>
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					overflow: 'visible',
					'& .MuiMenu-paper': {
						borderRadius: '24px',
						backgroundColor: 'PrimaryPurple',
						width: '192px',
						marginTop: '4px',
					},
				}}
			>
				<Link style={LinkStyles} href="/grades3-5">
					<MenuItem sx={MenuItemStyles} onClick={handleClose}>
						Grades 3-5
					</MenuItem>
				</Link>
				<Link style={LinkStyles} href="/grades6-7">
					<MenuItem sx={MenuItemStyles} onClick={handleClose}>
						Grades 6-7
					</MenuItem>
				</Link>
				<Link style={LinkStyles} href="/grades8-12">
					<MenuItem sx={MenuItemStyles} onClick={handleClose}>
						Grades 8-12
					</MenuItem>
				</Link>
			</Menu>
		</Box>
	);
};
