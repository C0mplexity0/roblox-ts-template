import React from "@rbxts/react";
import { UI_STYLES } from "../styles";

interface UIButtonProps extends React.ComponentProps<"textbutton"> {}

const DefaultUIButtonProps: Partial<UIButtonProps & React.ComponentProps<"textbutton">> = {
	Text: "",
	TextColor3: UI_STYLES.PRIMARY_TEXT,
	TextSize: UI_STYLES.FONT_SIZE_MD,
	FontFace: UI_STYLES.FONT_FACE,

	BackgroundColor3: UI_STYLES.PRIMARY,
};

export function UIButton(props: UIButtonProps) {
	const combinedProps = { ...DefaultUIButtonProps, ...props };

	return (
		<textbutton {...combinedProps}>
			<uicorner CornerRadius={new UDim(0, 8)} />
			{combinedProps.children}
		</textbutton>
	);
}
