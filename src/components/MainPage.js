import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MailIcon from '@mui/icons-material/Mail';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import About from '../pages/About.js'
import Cards from '../pages/Cards.js'
import Contact from '../pages/Contact.js'
import Contribution from '../pages/Contribution.js'
import Files from '../pages/Files.js'
import Funds from '../pages/Funds.js'
import Localization from '../pages/Localization.js'
import Journals from '../pages/journals/Journals.js'
import News from '../pages/News.js'
import Search from '../pages/Search.js'
import ReactDOM from 'react-dom';

const drawerWidth = 240;

export default function MainPage() {

	const render = component => {
		ReactDOM.render(component, document.getElementById('appView'));
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
			</AppBar>
			<Drawer
				sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					color: 'white',
					bgcolor: 'success.main',
				},
				}}
				bgcolor="grey"
				variant="permanent"
				anchor="left"
			>
				<Toolbar>
				<Typography variant="h5" noWrap component="div">
					Archeion
				</Typography>
				</Toolbar>
				<Divider />
				<List>
					<ListItemButton onClick={() => Search()}>
						<ListItemIcon>
							<ManageSearchIcon />
						</ListItemIcon>
							<ListItemText primary='Buscar no Acervo' />
					</ListItemButton>
					<ListItemButton onClick={() => render(<Journals />)}>
						<ListItemIcon>
							<NewspaperIcon />
						</ListItemIcon>
							<ListItemText primary='Hemeroteca' />
					</ListItemButton>
					<ListItemButton onClick={() => Funds()}>
						<ListItemIcon>
							<AccountBalanceIcon/>
						</ListItemIcon>
							<ListItemText primary='Arquivo Histórico' />
					</ListItemButton>
					<ListItemButton onClick={() => Cards()}>
						<ListItemIcon>
							<TextSnippetIcon/>
						</ListItemIcon>
							<ListItemText primary='Fichas' />
					</ListItemButton>
					<ListItemButton onClick={() => Contribution()}>
						<ListItemIcon>
							<KeyboardIcon/>
						</ListItemIcon>
							<ListItemText primary='Transcrições' />
					</ListItemButton>
					<ListItemButton onClick={() => News()}>
						<ListItemIcon>
							<NewspaperIcon/>
						</ListItemIcon>
							<ListItemText primary='Notícias' />
					</ListItemButton>
					<ListItemButton onClick={() => Files()}>
						<ListItemIcon>
							<UploadFileIcon/>
						</ListItemIcon>
							<ListItemText primary='Meus arquivos' />
					</ListItemButton>
				</List>
				<Divider />
				<List>
					<ListItemButton onClick={() => About()}>
						<ListItemIcon>
							<InfoIcon/>
						</ListItemIcon>
							<ListItemText primary='Sobre o Projeto' />
					</ListItemButton>
					<ListItemButton onClick={() => Localization()}>
						<ListItemIcon>
							<LocationCityIcon/>
						</ListItemIcon>
							<ListItemText primary='Localização' />
					</ListItemButton>
					<ListItemButton onClick={() => Contact()}>
						<ListItemIcon>
							<MailIcon/>
						</ListItemIcon>
							<ListItemText primary='Contato' />
					</ListItemButton>
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<div id="appView"></div>
				<Toolbar />
			</Box>
		</Box>
	);
}
