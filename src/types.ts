export type QuestionnaireData = {
    created_at: string;
    diagnosis: string;
    sui_score: number;
    uui_score: number;
};

export type InvitationData = {
    created_at: string;
    expire_at: string;
    id: number;
    lastused_at: string | null;
    link: string | null;
    playlist: string | null;
    questionnaire: QuestionnaireData;
    token: string;
    updated_at: string;
    viewed: number;
};