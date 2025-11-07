import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Page } from "@/widgets/Page";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { ProfileRating } from "@/features/profileRating";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page data-testid="ProfilePage" className={classNames("", {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
