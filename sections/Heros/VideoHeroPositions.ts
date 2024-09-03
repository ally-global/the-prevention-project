
type PositionsType = {
	[key: string]: {
		width: string;
		top?: string;
		left?: string;
		right?: string;
		bottom?: string;
	};
};


export const mobilePositions: PositionsType = {
    topLeft: {
        width: '180px',
        top: '-12px',
        left: '-10px',
    },
    middleLeft: {
        width: '100px',
        top: '46px',
        left: '-24px',
    },
    bottomLeft: {
        width: '120px',
        left: '-12px',
        bottom: '6px',
    },
    topRight: {
        width: '126px',
        top: '16px',
        right: '-30px',
    },
    middleRight: {
        width: '134px',
        bottom: '42px',
        right: '-28px',
    },
    bottomRight: { width: '102px', right: '12px', bottom: '-12px' },
};

export const tabletPositions: PositionsType = {
    topLeft: {
        width: '220px',
        top: '10px',
        left: '-90px',
    },
    middleLeft: {
        width: '186px',
        top: '100px',
        left: '-118px',
    },
    bottomLeft: {
        width: '160px',
        left: '-68px',
        bottom: '-12px',
    },
    topRight: {
        width: '170px',
        top: '16px',
        right: '-90px',
    },
    middleRight: {
        width: '200px',
        top: '130px',
        left: '-90px',
    },
    bottomRight: { width: '160px', right: '-60px', bottom: '8px' },
};

export const positions: PositionsType = {
    topLeft: {
        width: '302px',
        top: '24px',
        left: '-180px',
    },
    middleLeft: {
        width: '290px',
        top: '140px',
        left: '-212px',
    },
    bottomLeft: {
        width: '218px',
        left: '-124px',
        bottom: '-24px',
    },
    topRight: {
        width: '226px',
        top: '22px',
        right: '-164px',
    },
    middleRight: {
        width: '291px',
        top: '160px',
        left: '-100px',
    },
    bottomRight: { width: '190px', right: '-112px', bottom: '20px' },
};

export const mobileTextStyle = {
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: '500',
    paddingX: '6px',
    paddingY: '8px',
    borderRadius: 3,
    textAlign: 'center',
};

export const tabletTextStyles = {
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: '700',
    paddingX: '6px',
    paddingY: '8px',
    borderRadius: 3,
    textAlign: 'center',
};

export const textStyles = {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '700',
    paddingX: '6px',
    paddingY: '10px',
    borderRadius: 3,
    textAlign: 'center',
};