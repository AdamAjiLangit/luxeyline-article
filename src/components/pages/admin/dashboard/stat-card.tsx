import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StatCardProps = {
    title: string;
    value: string;
    icon?: React.ReactNode;
};

export const StatCard = ({ title, value, icon }: StatCardProps) => {
    return (
        <Card className="shadow-sm border border-muted bg-white dark:bg-muted/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                {icon && <div className="text-muted-foreground">{icon}</div>}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
            </CardContent>
        </Card>
    );
};
