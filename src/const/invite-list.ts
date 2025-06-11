export type IInvited = {
    urlCode: string;
    firstInvitedName: string;
    secondInvitedName: string | 'Acompanhante';
}


export const INVITE_LIST: IInvited[]  = [
    {
        urlCode: 'e3g1',
        firstInvitedName: 'Allan Paulo',
        secondInvitedName: 'Rayssa Rocha',
    },
    {
        urlCode: 'd4h2',
        firstInvitedName: 'Dácio Santos',
        secondInvitedName: 'Islaine Criz',
    },
]