import * as React from 'react';
import NextLink from 'next/link';
import { styled, alpha, Theme } from '@yushii/u-ui/styles';
import Box from '@yushii/u-ui/Box';
import Typography from '@yushii/u-ui/Typography';
import Chip from '@yushii/u-ui/Chip';
import Divider from '@yushii/u-ui/Divider';
import MenuList, { MenuListProps } from '@yushii/u-ui/MenuList';
import MenuItem, { MenuItemProps } from '@yushii/u-ui/MenuItem';
import ROUTES from 'docs/src/route';
import PageContext from 'docs/src/modules/components/PageContext';
import SvgYushiiLogomark from 'docs/src/icons/SvgYushiiLogomark';
import { Link } from '@yushii/docs/Link';
import SvgU_UiLogomark from 'docs/src/icons/SvgU-Ui';
/* import SvgBaseUiLogo from 'docs/src/icons/SvgBaseUiLogo';
import SvgToolpadCoreLogo from 'docs/src/icons/SvgToolpadCoreLogo'; */
/* import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import BrushIcon from '@mui/icons-material/Brush'; */

/* const iconStyles = (theme: Theme) => ({
  fontSize: '.875rem',
  color: (theme.vars || theme).palette.primary.main,
}); */

const logoColor = (theme: Theme) => ({
  '& path': {
    ...theme.applyDarkStyles({
      fill: (theme.vars || theme).palette.primary[400],
    }),
  },
});

const NavLabel = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(0.5, 1, 0.5, 1),
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightSemiBold,
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    color: (theme.vars || theme).palette.text.tertiary,
    '&:hover': {
      color: (theme.vars || theme).palette.text.primary
    }
}));

interface ProductItemProps extends MenuItemProps {
    active?: boolean;
    chip?: React.ReactNode;
    description?: string;
    href: string;
    icon?: React.ReactNode;
    name: string;
}

function ProductItem({
    active,
    chip,
    description,
    href,
    icon,
    name,
    sx = [],
    ...other
}: ProductItemProps) {
  return (
    <MenuItem
        component={NextLink} // using the Next link directly here as it accepts, as opposed to the docs Link, passing role="menuitem"
        role="menuitem"
        href={href}
        sx={[
            (theme) => ({
            p: 1,
            pl: '6px',
            display: 'flex',
            alignItems: 'start',
            gap: '8px',
            flexGrow: 1,
            backgroundColor: active ? alpha(theme.palette.primary[50], 0.8) : undefined,
            border: '1px solid',
            borderColor: active ? 'primary.100' : 'transparent',
            borderRadius: '8px',
            transition: '100ms ease-in background-color, border',
            textDecorationLine: 'none',
            '&:hover': {
                backgroundColor: active ? alpha(theme.palette.primary[50], 0.8) : 'grey.50',
                borderColor: 'divider',
            },
            '&.Yushii-focusVisible': {
                backgroundColor: active ? (theme.vars || theme).palette.primary[50] : 'transparent',
            },
            ...theme.applyDarkStyles({
                backgroundColor: active ? alpha(theme.palette.primary[900], 0.2) : undefined,
                borderColor: active ? alpha(theme.palette.primary[300], 0.2) : 'transparent',
                '&:hover': {
                backgroundColor: active
                    ? alpha(theme.palette.primary[900], 0.3)
                    : alpha(theme.palette.primaryDark[700], 0.5),
                },
                '&.Yushii-focusVisible': {
                backgroundColor: active ? alpha(theme.palette.primary[900], 0.5) : 'transparent',
                },
            }),
            }),
            // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
    >
        <Box
            sx={{
            height: 21, // match the Typography line-height
            width: 21,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            {icon}
        </Box>
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Typography color="text.primary" variant="body2" fontWeight="semiBold">
                    {name}
                </Typography>
                {chip}
            </Box>
            <Typography color="text.secondary" fontSize=".813rem">
                {description}
            </Typography>
        </div>
    </MenuItem>
  );
}

const coreProducts = [
  {
    id: 'u-ui',
    name: 'U-Ui',
    description: 'Comprehensive foundational components.',
    icon: <SvgU_UiLogomark height={24} sx={logoColor} />,
    href: ROUTES.uUiDocs,
  },
];

const YushiiProductSelector = React.forwardRef(function YushiiProductSelector(
  props: MenuListProps<'div'>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const pageContext = React.useContext(PageContext);

  return (
    <MenuList
      {...props}
      component="div"
      ref={forwardedRef}
      sx={{
        p: 1,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, minmax(0, 1fr))',
          sm: 'repeat(2, minmax(0, 1fr))',
        },
        gap: '4px',
      }}
    >
      <Box
        key="X components"
        role="none"
        sx={{
          gridColumn: {
            xs: '1 / span 1',
            sm: '1 / span 2',
          },
        }}
      >
      <Link href="/u-core/">
        <NavLabel>U-Core Components</NavLabel>
      </Link>
      </Box>
      {coreProducts.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          description={product.description}
          href={product.href}
          icon={product.icon}
          active={pageContext.productId === product.id}
        />
      ))}
      <Divider
        sx={{
          mx: -1,
          gridColumn: {
            xs: '1 / span 1',
            sm: '1 / span 2',
          },
        }}
      />
      <Box
        key="X components"
        role="none"
        sx={{
          gridColumn: {
            xs: '1 / span 1',
            sm: '1 / span 2',
          },
        }}
      >
        {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
        <NavLabel>MUI X Components</NavLabel>
      </Box>
      {/* {advancedProducts.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          description={product.description}
          icon={product.icon}
          href={product.href}
          active={pageContext.productId === product.id}
        />
      ))} */}
      <Divider
        sx={{
          mx: -1,
          gridColumn: {
            xs: '1 / span 1',
            sm: '1 / span 2',
          },
        }}
      />
      <Box
        key="Toolpad"
        role="none"
        sx={{
          gridColumn: {
            xs: '1 / span 1',
            sm: '1 / span 2',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
          <NavLabel> Toolpad </NavLabel>
          <Chip
            label="Beta"
            size="small"
            color="primary"
            variant="outlined"
            sx={{
              fontSize: '.625rem',
              fontWeight: 'semiBold',
              textTransform: 'uppercase',
              letterSpacing: '.04rem',
              height: '16px',
              '& .YushiiChip-label': {
                px: '4px',
              },
            }}
          />
        </Box>
      </Box>
      {/* {toolpadProducts.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          description={product.description}
          icon={product.icon}
          href={product.href}
          active={pageContext.productId === product.id}
        />
      ))} */}
    </MenuList>
  );
});

export default YushiiProductSelector;