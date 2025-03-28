import { styled } from '@u_ui/u-ui/styles';

const GradientText = styled('span')<{
  color?: 'primary' | 'secondary' | 'contrast' | 'neutral' | 'error' | 'success' | 'warning';
}>(({ theme }) => ({
  variants: [
    ...Object.entries((theme.vars || theme).palette as Record<string, any>)
      .filter(([color, value]) => color !== 'primary' && value && value[400])
      .map(([color, value]) => ({
        props: { color },
        style: {
          background: `linear-gradient(90deg, ${value[400]} 5%, ${value.main} 90%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      })),
    {
      props: { color: 'primary'},
      style: {
        background: `linear-gradient(90deg, ${(theme.vars || theme).palette.primary[400]} 5%, ${(theme.vars || theme).palette.primary.main} 90%)`,
        // `Webkit` has to come later
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  ],
}));

export default GradientText;
